//Authorization GUI changes

/** @jsxImportSource @emotion/react */
"use client";
import {
  AppBar,
  Container,
  Toolbar,
  Button,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import { css, keyframes } from "@emotion/react";

// Defining  the keyframes for the animations
const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blinkCursor = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: #FF6F61;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
`;

const textShadowGlow = keyframes`
  from {
    text-shadow: 0 0 15px #ffcc80, 0 0 25px #ffcc80,
      0 0 35px #ffcc80, 0 0 45px #ff6f61, 0 0 75px #ff6f61,
      0 0 85px #ff6f61, 0 0 120px #ff6f61;
  }
  to {
    text-shadow: 0 0 25px #ffcc80, 0 0 40px #ffcc80,
      0 0 60px #ffcc80, 0 0 80px #ff6f61, 0 0 120px #ff6f61,
      0 0 150px #ff6f61, 0 0 200px #ff6f61;
  }
`;

export default function SignUpPage() {
  return (
    <Container maxWidth="100vw" disableGutters>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#FF6F61", boxShadow: "none" }}
      >
        <Toolbar>
          <Avatar
            src="/e2.jpg" //  logo image
            alt="Logo"
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              marginRight: 2,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 700,
            }}
          >
            InsightInk
          </Typography>
          <Button
            component={Link}
            href="/sign-in"
            variant="contained"
            sx={{
              backgroundColor: "#FFB74D",
              color: "#fff",
              borderRadius: "20px",
              marginLeft: 1,
              "&:hover": {
                backgroundColor: "#FF8A65",
              },
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Login
          </Button>
          <Button
            component={Link}
            href="/sign-up"
            variant="contained"
            sx={{
              backgroundColor: "#FFB74D",
              color: "#fff",
              borderRadius: "20px",
              marginLeft: 1,
              "&:hover": {
                backgroundColor: "#FF8A65",
              },
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(45deg, #FF6F61, #FFB74D, #FF8A65)",
          backgroundSize: "200% 200%",
          animation: `${gradientShift} 5s ease infinite`,
          padding: 3,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/background.jpg')", // Path to your background image
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(20px)",
            zIndex: -1,
            opacity: 0.1,
          }}
        />
        {/* Background SVG */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.2,
          }}
        >
          <svg
            className="w-96 h-96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path
              d="M50 50c-16.67 0-30 13.33-30 30s13.33 30 30 30 30-13.33 30-30-13.33-30-30-30z"
              stroke="#FF6F61"
              strokeWidth="3"
              fill="none"
              css={css`
                animation: ${pulse} 3s infinite;
              `}
            />
          </svg>
        </Box>

        {/* Welcome Text and Sign-In Heading */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: 5,
            paddingRight: 3,
          }}
        >
          <Typography
            variant="h2"
            css={css`
              font-size: 2.5rem;
              font-weight: 700;
              color: #fff;
              text-shadow: 0 0 15px #ffcc80, 0 0 25px #ffcc80, 0 0 35px #ffcc80,
                0 0 45px #ff6f61, 0 0 75px #ff6f61, 0 0 85px #ff6f61,
                0 0 120px #ff6f61;
              margin-bottom: 1rem;
              animation: ${textShadowGlow} 1.5s ease-in-out infinite,
                slideIn 1s ease-out;
              @keyframes slideIn {
                from {
                  transform: translateX(-50%);
                }
                to {
                  transform: translateX(0);
                }
              }
            `}
          >
            WELCOME TO AI FLASHCARD GENERATOR
          </Typography>
          <Typography
            variant="h4"
            css={css`
              color: #fff;
              margin-top: 3rem;
              font-weight: 600;
              text-shadow: 0 0 5px #ff6f61;
              font-family: "Roboto", sans-serif;
              position: relative;
              font-size: 1.5rem;
              white-space: nowrap;
              overflow: hidden;
              border-right: 3px solid #ff6f61;
              animation: ${typing} 4s steps(40, end),
                ${blinkCursor} 0.75s step-end infinite,
                ${bounce} 2s ease-in-out infinite;
            `}
          >
            Illuminate Learning with AI Flashcards
          </Typography>
        </Box>

        {/* Heading Outside the Box */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{
            position: "absolute",
            top: "10%",
            width: "100%",
            textAlign: "center",
            zIndex: 2,
            color: "#FF6F61",
            fontFamily: "'Roboto', sans-serif",
          }}
        ></Box>

        {/* Sign-In Component */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            position: "relative",
            backgroundColor: "#FFF",
            border: "2px solid #FFB3B3",
            borderRadius: "12px",
            padding: 3,
            width: "90%",
            maxWidth: "450px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.4)",
            },
          }}
        >
          <SignIn />
        </Box>
      </Box>
    </Container>
  );
}
