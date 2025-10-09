import { useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  Email,
  Person,
  Subject as SubjectIcon,
  Send,
} from "@mui/icons-material";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm);

  const isValid = useMemo(() => {
    return form.name.trim() && form.email.trim() && form.message.trim();
  }, [form]);

  const handleChange =
    (key: keyof ContactForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleReset = () => setForm(initialForm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: wire your API call here
    // Example: apiService.mutation(...)
    alert("Submitted! (Demo)");
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        fontWeight={900}
        sx={{
          mb: 2,
          background: "linear-gradient(45deg, #9231c6 30%, #0c7a72 90%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Contact Us
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Have a question or feedback? Fill out the form and see your message
        preview live on the right.
      </Typography>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Form */}
        <Paper sx={{ p: 3 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Your Name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={handleChange("name")}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ mr: 1, color: "text.secondary" }} />
                      </InputAdornment>
                    ),
                  },
                }}
                required
              />
              <TextField
                type="email"
                label="Email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={handleChange("email")}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email sx={{ mr: 1, color: "text.secondary" }} />
                      </InputAdornment>
                    ),
                  },
                }}
                required
              />
              <TextField
                label="Subject"
                placeholder="How can we help?"
                value={form.subject}
                onChange={handleChange("subject")}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SubjectIcon sx={{ mr: 1, color: "text.secondary" }} />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                label="Message"
                placeholder="Write your message here..."
                multiline
                minRows={5}
                value={form.message}
                onChange={handleChange("message")}
                helperText={`${form.message.length} characters`}
                required
              />

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<Send />}
                  disabled={!isValid}
                >
                  Send Message
                </Button>
                <Button type="button" variant="outlined" onClick={handleReset}>
                  Reset
                </Button>
              </Stack>
            </Stack>
          </form>

          <Alert severity="info" sx={{ mt: 2 }}>
            This is a demo page. Hook up your API in the submit handler.
          </Alert>
        </Paper>

        {/* Live Preview */}
        <Paper sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h6" fontWeight={700}>
            Live Preview
          </Typography>
          <Divider />

          <Box>
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
              {form.name ? (
                <Chip label={form.name} color="primary" variant="outlined" />
              ) : null}
              {form.email ? (
                <Chip label={form.email} color="secondary" variant="outlined" />
              ) : null}
            </Stack>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 0.5 }}>
              {form.subject || "(No subject)"}
            </Typography>
            <Paper variant="outlined" sx={{ p: 2, minHeight: 120 }}>
              <Typography color="text.secondary" whiteSpace="pre-wrap">
                {form.message ||
                  "Your message will appear here in real-time as you type..."}
              </Typography>
            </Paper>
          </Box>

          <Divider />

          <Box>
            <Typography variant="caption" color="text.secondary">
              JSON
            </Typography>
            <Paper
              sx={{
                p: 2,
                bgcolor: "grey.100",
                fontFamily: "monospace",
                overflow: "auto",
              }}
            >
              <Typography component="pre" variant="body2" sx={{ m: 0 }}>
                {JSON.stringify(form, null, 2)}
              </Typography>
            </Paper>
          </Box>
        </Paper>
      </div>
    </Container>
  );
}
