"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "convex/react";
import Form from "next/form";
import React, { useState } from "react";
import { api } from "../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function CreateEvent() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [organizer, setOrganizer] = useState("");

  const router = useRouter();

  const mutation = useMutation(api.events.createEvent);

  function handleCreateEvent() {
    mutation({
      name,
      date,
      description,
      location,
      organizer,
    });

    toast("New event has been created", {
      description: "You have successfully created a new event",
    });
    router.push("/");
  }

  return (
    <div className="mx-auto mt-10 max-w-4xl space-y-4">
      <h2 className="mb-4 text-xl font-bold">Create Event</h2>

      <div>
        <Form onSubmit={handleCreateEvent} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <article>
              <Label
                htmlFor="event-name"
                className="mb-2 inline-block font-semibold"
              >
                Event name
              </Label>
              <Input
                type="text"
                id="event-name"
                placeholder="Event name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </article>

            <article>
              <Label
                htmlFor="event-date"
                className="mb-2 inline-block font-semibold"
              >
                Event date
              </Label>
              <Input
                type="text"
                id="event-date"
                placeholder="Event date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </article>
          </div>

          <div>
            <Label
              htmlFor="description"
              className="mb-2 inline-block font-semibold"
            >
              Event description
            </Label>
            <Textarea
              id="description"
              placeholder="Enter event description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article>
              <Label
                htmlFor="event-location"
                className="mb-2 inline-block font-semibold"
              >
                Event location
              </Label>
              <Input
                type="text"
                id="event-location"
                placeholder="Event location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </article>
            <article>
              <Label
                htmlFor="event-organizer"
                className="mb-2 inline-block font-semibold"
              >
                Event organizer
              </Label>
              <Input
                type="text"
                id="event-organizer"
                placeholder="Event organizer"
                required
                value={organizer}
                onChange={(e) => setOrganizer(e.target.value)}
              />
            </article>
          </div>

          <Button
            onClick={handleCreateEvent}
            type="submit"
            variant="secondary"
            size="lg"
          >
            Create new event
          </Button>
        </Form>
      </div>
    </div>
  );
}
