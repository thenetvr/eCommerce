"use client";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";
import { ToastAction } from "./ui/toast";

// use the toast component from 'use-toast' hook
export const ToastDemo = () => {
  const { toast } = useToast();

  return (
    <Button
      // variant="outline"
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Try again">
              <a href="/">Back To Homepage</a>
            </ToastAction>
          ),
        });
      }}
    >
      Show Toast
    </Button>
  );
};
