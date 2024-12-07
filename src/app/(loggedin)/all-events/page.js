"use client";

import { useMutation, useQuery } from "convex/react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { api } from "../../../../convex/_generated/api";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { format } from "date-fns";

export default function AllEvents() {
  const events = useQuery(api.events.get);
  const mutation = useMutation(api.events.deleteEvent);

  function handleDeleteEvent(_id) {
    mutation({ id: _id });
    toast("Event deleted", {
      description: "You have successfully deleted the event",
    });
  }

  if (!events) {
    return (
      <div className="mx-auto mt-10 max-w-4xl">
        <Loader2 className="mx-auto block size-9 animate-spin text-neutral-400" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-2 py-10">
      <div className="mx-auto grid max-w-xl gap-4">
        {events?.map((event) => (
          <Card key={event._id} className="group relative max-w-xl">
            <CardHeader>
              <div className="flex flex-col flex-wrap items-start justify-between space-y-1">
                <CardDescription>
                  Created on: {format(event._creationTime, "do MMMM yyyy")}
                </CardDescription>
                <CardTitle className="break-words leading-7">
                  {event.name}
                </CardTitle>
                <CardDescription>
                  Organized by {event.organizer}
                </CardDescription>
                <CardDescription>Location: {event.location}</CardDescription>
                <CardDescription>Event date: {event.date}</CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-bold">About the event</h4>
                <CardDescription className="text-sm leading-6 text-neutral-600">
                  {event.description}
                </CardDescription>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute -right-12 -top-4 ml-auto block opacity-0 transition group-hover:opacity-100"
                  >
                    <Trash2 />
                  </Button>
                </DialogTrigger>

                <DialogContent className="border border-neutral-800 bg-neutral-900">
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      You are about to delete an event entry. This action cannot
                      be undone, and will permanently delete the entry from the
                      servers.
                    </DialogDescription>
                  </DialogHeader>

                  <ul className="flex items-center justify-end gap-x-4">
                    <li>
                      <DialogClose asChild>
                        <Button variant="secondary" size="sm">
                          Cancel
                        </Button>
                      </DialogClose>
                    </li>
                    <li>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="flex items-center justify-center gap-x-2 transition"
                        onClick={() => handleDeleteEvent(event._id)}
                      >
                        <Trash2 /> Delete
                      </Button>
                    </li>
                  </ul>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
