import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Link from "next/link";
type CardType = {
  data: {
    id: string;
    avatar: string;
    name: string;
    age: number;
    country: string;
    education: string;
  };
};
export default function OverflowCard({ data }: CardType) {
  return (
    <Link href={`/labor/${data.id}`}>
      <Card variant="outlined" sx={{ width: 320 }}>
        <CardOverflow>
          <AspectRatio ratio="1">
            <img
              src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
              srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="title-md">{data.name}</Typography>
        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
            >
              年齡: {data.age}
            </Typography>
            <Divider orientation="vertical" />
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
            >
              國家: {data.country}
            </Typography>
            <Divider orientation="vertical" />
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
            >
              教育: {data.education}
            </Typography>
          </CardContent>
        </CardOverflow>
      </Card>
    </Link>
  );
}
