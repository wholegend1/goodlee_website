"use client";
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import PlaylistAddCheckTwoToneIcon from "@mui/icons-material/PlaylistAddCheckTwoTone";
import PlaylistAddTwoToneIcon from "@mui/icons-material/PlaylistAddTwoTone";
import Link from "next/link";
import MuiAlert from "@mui/material/Alert";
import { useState } from "react";
import { Snackbar } from "@mui/material";
type CardType = {
  data: {
    id: string;
    avatar: string;
    name: string;
    age: number;
    country: string;
    education: string;
    collection?: boolean;
  };
};
export default function OverflowCard({ data }: CardType) {
  const [isInCollection, setIsInCollection] = useState(
    data.collection || false
  );
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // 关闭 Snackbar
  };
  const toggleCollection = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsInCollection(!isInCollection);
    setOpenSnackbar(true); // 打开 Snackbar
    // 这里添加处理收藏的逻辑
  };
  return (
    <>
      <Card variant="outlined" sx={{ minWidth: 320 }}>
        <Link href={`/labor/${data.id}`} passHref>
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
        </Link>

        <CardContent>
          <Typography level="title-md" className="flex justify-between">
            {data.name}
            <div
              onClick={toggleCollection}
              className="button z-10 hover:bg-gray-300 cursor-pointer "
            >
              {isInCollection ? (
                <PlaylistAddCheckTwoToneIcon />
              ) : (
                <PlaylistAddTwoToneIcon />
              )}
            </div>
          </Typography>
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        {isInCollection ? (
          <MuiAlert
            elevation={4}
            variant="filled"
            onClose={handleCloseSnackbar}
            severity="success"
          >
            已加入收藏
          </MuiAlert>
        ) : (
          <MuiAlert
            elevation={4}
            variant="filled"
            onClose={handleCloseSnackbar}
            severity="warning"
          >
            已取消收藏
          </MuiAlert>
        )}
      </Snackbar>
    </>
  );
}
