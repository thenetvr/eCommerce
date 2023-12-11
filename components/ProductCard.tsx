import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { baseImage } from "../constants";
import Image from "next/image";

interface Props {
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
  image?: string;
}

export default function ProductCard(props: Props) {
  const { title, description, content, footer, image } = props;
  const cardImage = image ? image : baseImage;

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-center">
          <Image
            className="rounded"
            src={cardImage}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      {content && (
        <CardContent>
          <p>{content}</p>
        </CardContent>
      )}
      {footer && (
        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
      )}
    </Card>
  );
}
