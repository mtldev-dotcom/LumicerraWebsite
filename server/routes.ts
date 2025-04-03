import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const data = insertContactSchema.parse(req.body);
      
      // Store the contact message
      const contact = await storage.createContactMessage(data);
      
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: "Contact message received", 
        id: contact.id 
      });
    } catch (error) {
      console.error("Error handling contact form submission:", error);
      
      // Handle Zod validation errors
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      
      // Handle other errors
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
