'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type WhiskeyCardProps = {
  title: string;
  description: string;
  age: string;
  abv: string;
  origin: string;
  onLearnMore?: () => void;
  onTasteNow?: () => void;
}

export function WhiskeyCard({
  title,
  description,
  age,
  abv,
  origin,
  onLearnMore,
  onTasteNow
}: WhiskeyCardProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>Age: {age}</p>
          <p>ABV: {abv}</p>
          <p>Origin: {origin}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onLearnMore}>Learn More</Button>
        <Button onClick={onTasteNow}>Taste Now</Button>
      </CardFooter>
    </Card>
  );
} 