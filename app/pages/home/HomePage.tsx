import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Divider,
  Paper,
  Typography,
  Alert,
  AlertTitle,
  Stack,
} from "@mui/material";
import {
  GitHub,
  Rocket,
  Speed,
  Code,
  Palette,
  Build,
  Storage,
  Security,
  ArrowForward,
  GetApp,
  PlayArrow,
  Description,
} from "@mui/icons-material";
import { ReactNode } from "react";

const TechStack = [
  { name: "React", version: "19.2.0", color: "#61DAFB" },
  { name: "Material-UI", version: "7.3.4", color: "#0081CB" },
  { name: "Tailwind CSS", version: "4.1.14", color: "#06B6D4" },
  { name: "React Router", version: "7.9.4", color: "#CA4245" },
  { name: "Redux Toolkit", version: "2.9.0", color: "#764ABC" },
  { name: "TypeScript", version: "5.9.3", color: "#3178C6" },
  { name: "Vite", version: "7.1.9", color: "#646CFF" },
];

function Feature({
  title,
  desc,
  icon,
  action,
}: {
  title: string;
  desc: string;
  icon?: ReactNode;
  action?: { label: string; onClick: () => void };
}) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        boxShadow: 1,
        ":hover": {
          boxShadow: 4,
          transform: "translateY(-2px)",
          transition: "all 0.3s ease-in-out",
        },
        transition: "all 0.3s ease-in-out",
      }}
    >
      <CardHeader
        avatar={icon}
        title={
          <Typography variant="h6" fontWeight={700}>
            {title}
          </Typography>
        }
        sx={{ pb: 1 }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {desc}
        </Typography>
        {action && (
          <Button
            size="small"
            variant="outlined"
            onClick={action.onClick}
            endIcon={<ArrowForward />}
          >
            {action.label}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <Paper
      sx={{
        p: 2,
        bgcolor: "grey.100",
        fontFamily: "monospace",
        overflow: "auto",
      }}
    >
      <Typography
        variant="body2"
        component="pre"
        sx={{ m: 0, whiteSpace: "pre-wrap" }}
      >
        {children}
      </Typography>
    </Paper>
  );
}

export default function HomePage() {
  const handleGetStarted = () => {
    window.open(
      "https://github.com/inexture-solutions/quick-start-react-mui",
      "_blank"
    );
  };

  const handleDownloadTemplate = () => {
    window.open(
      "https://github.com/inexture-solutions/quick-start-react-mui/archive/refs/heads/main.zip",
      "_blank"
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography
          variant="h2"
          fontWeight={900}
          sx={{
            mb: 2,
            background: "linear-gradient(45deg, #9231c6 30%, #0c7a72 90%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ⚡ MUI React Quick Starter
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 800, mx: "auto" }}
        >
          A modern, zero-bloat boilerplate featuring the latest React ecosystem.
          Perfect for kickstarting new projects with speed, consistency, and
          modern tooling.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<Rocket />}
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<GetApp />}
            onClick={handleDownloadTemplate}
          >
            Download Template
          </Button>
          <Button
            variant="text"
            size="large"
            startIcon={<GitHub />}
            href="https://github.com/inexture-solutions/quick-start-react-mui"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </Button>
        </Stack>

        {/* Tech Stack Pills */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "center",
          }}
        >
          {TechStack.map((tech) => (
            <Chip
              key={tech.name}
              label={`${tech.name} ${tech.version}`}
              variant="outlined"
              size="small"
              sx={{
                borderColor: tech.color,
                color: tech.color,
                ":hover": { backgroundColor: `${tech.color}20` },
              }}
            />
          ))}
        </Box>
      </Box>

      <Divider sx={{ mb: 6 }} />

      {/* Quick Start Guide */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
          🚀 Quick Start
        </Typography>

        <Alert severity="info" sx={{ mb: 3 }}>
          <AlertTitle>Prerequisites</AlertTitle>
          Make sure you have Node.js 18+ and your preferred package manager
          (npm, yarn, pnpm, or bun) installed.
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
              1. Clone the repository
            </Typography>
            <CodeBlock>{`git clone https://github.com/inexture-solutions/quick-start-react-mui.git
cd quick-start-react-mui`}</CodeBlock>
          </div>

          <div>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
              2. Install dependencies
            </Typography>
            <CodeBlock>{`# Using npm
npm install

# Using bun (recommended)
bun install`}</CodeBlock>
          </div>

          <div>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
              3. Start development server
            </Typography>
            <CodeBlock>{`npm run dev
# or
bun dev`}</CodeBlock>
          </div>

          <div>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
              4. Build for production
            </Typography>
            <CodeBlock>{`npm run build
# or
bun run build`}</CodeBlock>
          </div>
        </div>
      </Box>

      {/* Features Grid */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
          ✨ Features
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature
            icon={<Speed color="primary" />}
            title="Lightning Fast"
            desc="Vite 7 with SWC for ultra-fast dev server and builds. Hot module replacement that just works."
            action={{
              label: "Learn More",
              onClick: () => window.open("https://vitejs.dev/", "_blank"),
            }}
          />

          <Feature
            icon={<Palette color="secondary" />}
            title="Modern UI/UX"
            desc="Material-UI v7 with custom theming. Tailwind CSS v4 for utility-first styling that plays nice together."
            action={{
              label: "View Theme",
              onClick: () =>
                window.open(
                  "https://mui.com/material-ui/customization/theming/",
                  "_blank"
                ),
            }}
          />

          <Feature
            icon={<Code color="primary" />}
            title="Type Safe"
            desc="Full TypeScript 5 support with strict configuration. Catch errors at compile time, not runtime."
            action={{
              label: "TS Docs",
              onClick: () =>
                window.open("https://www.typescriptlang.org/", "_blank"),
            }}
          />

          <Feature
            icon={<Build color="secondary" />}
            title="Modern Routing"
            desc="React Router v7 with latest API. Nested layouts, active states, and type-safe navigation."
            action={{
              label: "Routing Guide",
              onClick: () => window.open("https://reactrouter.com/", "_blank"),
            }}
          />

          <Feature
            icon={<Storage color="primary" />}
            title="State Management"
            desc="Redux Toolkit with persistence and optional encryption. Clean, predictable state updates."
            action={{
              label: "Redux Setup",
              onClick: () =>
                window.open("https://redux-toolkit.js.org/", "_blank"),
            }}
          />

          <Feature
            icon={<Security color="secondary" />}
            title="Production Ready"
            desc="ESLint config, optimized builds, and best practices built-in."
            action={{
              label: "React Docs",
              onClick: () => window.open("https://react.dev/", "_blank"),
            }}
          />
        </div>
      </Box>

      {/* Project Structure */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
          📁 Project Structure
        </Typography>

        <Paper sx={{ p: 3 }}>
          <CodeBlock>{`app/
├── assets/
│   └── css/
│       └── styles.css
├── components/
│   └── common/
│       └── Header.tsx
├── layouts/
│   └── PublicLayout.tsx
├── pages/
│   ├── contact/
│   │   └── ContactPage.tsx
│   ├── error/
│   │   └── ErrorPage.tsx
│   └── home/
│       └── HomePage.tsx
├── routes/
│   └── index.tsx
├── services/
│   ├── api.service.ts
│   └── repo.service.ts
├── store/
│   ├── index.ts
│   └── app/
│       ├── app.reducer.ts
│       ├── auth.slice.ts
│       └── config.slice.ts
├── theme/
│   └── index.ts
├── App.tsx
└── index.tsx`}</CodeBlock>
        </Paper>
      </Box>

      {/* Usage Examples */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
          📚 Usage Examples
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader
              title={
                <Typography fontWeight={700}>Creating a New Page</Typography>
              }
              avatar={<Description color="primary" />}
            />
            <CardContent>
              <CodeBlock>{`// app/pages/about/AboutPage.tsx
import { Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <div className="p-6">
      <Typography variant="h4">About Us</Typography>
    </div>
  );
};

export default AboutPage;`}</CodeBlock>
            </CardContent>
          </Card>

          <Card>
            <CardHeader
              title={
                <Typography fontWeight={700}>Adding Redux State</Typography>
              }
              avatar={<Storage color="secondary" />}
            />
            <CardContent>
              <CodeBlock>{`// app/store/user/user.slice.ts
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { name: "", email: "" },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;`}</CodeBlock>
            </CardContent>
          </Card>
        </div>
      </Box>

      {/* Call to Action */}
      <Paper
        sx={{
          p: 4,
          textAlign: "center",
          background: "linear-gradient(135deg, #9231c620 0%, #0c7a7220 100%)",
          border: "1px solid",
          borderColor: "primary.light",
        }}
      >
        <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
          Ready to build something amazing?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Get started with this modern React boilerplate and ship your next
          project faster.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<PlayArrow />}
            onClick={handleGetStarted}
          >
            Start Building
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<GitHub />}
            href="https://github.com/inexture-solutions/quick-start-react-mui/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Report Issues
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
