import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertFeedbackSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Feedback form submission endpoint
  app.post('/api/feedback', async (req, res) => {
    try {
      const feedbackData = insertFeedbackSchema.parse(req.body);
      const result = await storage.createFeedback(feedbackData);
      res.status(201).json({
        success: true,
        message: 'Feedback submitted successfully',
        data: result
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false, 
          message: validationError.message
        });
      } else {
        res.status(500).json({
          success: false,
          message: 'An error occurred while submitting feedback'
        });
      }
    }
  });

  // Get all feedback (for admin purposes)
  app.get('/api/feedback', async (req, res) => {
    try {
      const feedbackList = await storage.getAllFeedback();
      res.status(200).json({
        success: true,
        data: feedbackList
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'An error occurred while retrieving feedback'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
