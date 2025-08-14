"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="border-none shadow-none">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <CardTitle className="text-4xl font-bold text-traq-black">
              404
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Oops! The page you&apos;re looking for doesn&apos;t exist.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                The page you&apos;re trying to access might have been moved,
                deleted, or you entered the wrong URL.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button asChild className="w-full">
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go to Home
                </Link>
              </Button>

              <Button variant="outline" asChild className="w-full">
                <Link href="javascript:history.back()">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Go Back
                </Link>
              </Button>
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Need help? Contact our support team
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
