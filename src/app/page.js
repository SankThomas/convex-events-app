"use client";

import { useMutation, useQuery } from "convex/react";
import React from "react";
import { api } from "../../convex/_generated/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const events = useQuery(api.events.get);
  const mutation = useMutation(api.events.deleteEvent);

  return (
    <div className="container mx-auto px-2 py-10">
      <div className="mx-auto grid max-w-xl gap-4">
        {events?.map((event) => (
          <Card key={event._id} className="group">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between">
                <CardTitle>{event.name}</CardTitle>
                <CardDescription className="font-semibold text-white">
                  {event.organizer}
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <CardDescription className="text-sm leading-6 text-neutral-600">
                {event.description}
              </CardDescription>
              <CardDescription>
                {event.location} &middot;{" "}
                {format(new Date(event.date), "do MMMM yyyy")}
              </CardDescription>

              <Button
                variant="destructive"
                className="ml-auto block opacity-0 transition group-hover:opacity-100"
                onClick={function handleDeleteEvent() {
                  mutation({ id: event._id });
                  toast("Event deleted", {
                    description: "You have successfully deleted the event",
                  });
                }}
              >
                <Trash2 />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
