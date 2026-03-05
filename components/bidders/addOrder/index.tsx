"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Button,
  Input,
  Select,
  Typography
} from "@worldcoin/mini-apps-ui-kit-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

export default function CreateOrderDrawer() {
  const [formData, setFormData] = useState({
    orderNumber: "",
    title: "",
    pageCount: "",
    wordCount: "",
    amount: "",
    writerId: "",
  });

  return (
    <div className="flex justify-center w-full min-h-[calc(100vh-4rem)] p-4 md:p-8 bg-background">
      <Card className="w-full max-w-2xl border shadow-sm bg-card text-card-foreground">
        <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-8 border-b">
          <Button
            variant="secondary"
            size="icon"
            className="h-10 w-10 rounded-full bg-muted/50 hover:bg-muted shrink-0"
            asChild
          >
            <Link href="/dashboard">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div className="flex flex-col">
            <CardTitle className="text-xl font-semibold tracking-tight">
              New Assignment
            </CardTitle>
            <Typography variant="body" className="text-muted-foreground text-sm mt-0.5">
              Enter the project details below
            </Typography>
          </div>
        </CardHeader>
        
        <CardContent className="pt-8">
          <form className="space-y-8">
            <FieldGroup className="space-y-6">
              {/* Top Row: Order No & Title */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Field className="md:col-span-1">
                  <FieldLabel htmlFor="orderNumber" className="text-sm font-medium mb-2">
                    Order #
                  </FieldLabel>
                  <Input
                    id="orderNumber"
                    label="e.g. 2024-001"
                    required
                    value={formData.orderNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, orderNumber: e.target.value })
                    }
                    className="bg-background" 
                  />
                </Field>
                
                <Field className="md:col-span-2">
                  <FieldLabel htmlFor="title" className="text-sm font-medium mb-2">
                    Project Title
                  </FieldLabel>
                  <Input
                    id="title"
                    label="e.g. Research Paper on AI"
                    required
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="bg-background"
                  />
                </Field>
              </div>

              {/* Middle Row: Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <Field>
                  <FieldLabel htmlFor="pageCount" className="text-sm font-medium mb-2">
                    Pages
                  </FieldLabel>
                  <Input
                    id="pageCount"
                    type="number"
                    label="0"
                    required
                    value={formData.pageCount}
                    onChange={(e) =>
                      setFormData({ ...formData, pageCount: e.target.value })
                    }
                    className="bg-background"
                  />
                </Field>
                
                <Field>
                  <FieldLabel htmlFor="wordCount" className="text-sm font-medium mb-2">
                    Words
                  </FieldLabel>
                  <Input
                    id="wordCount"
                    type="number"
                    label="0"
                    required
                    value={formData.wordCount}
                    onChange={(e) =>
                      setFormData({ ...formData, wordCount: e.target.value })
                    }
                    className="bg-background"
                  />
                </Field>
              </div>

              {/* Bottom Row: Assignment */}
              <Field>
                <FieldLabel htmlFor="writerId" className="text-sm font-medium mb-2">
                  Assign Writer
                </FieldLabel>
                <Select
                  options={[
                    { value: "1", label: "Alex Writer" },
                    { value: "2", label: "Sarah Editor" },
                  ]}
                  required
                  value={formData.writerId}
                  onChange={(val) => setFormData({ ...formData, writerId: val })}
                  label="Select a writer..."
                  className="w-full bg-background"
                />
              </Field>

              <div className="pt-6">
                <Button 
                  type="button" 
                  className="w-full h-12 text-base font-medium rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition shadow-sm"
                >
                  Create Order
                </Button>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
