import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.post("/api/generate", async (req, res) => {

  try {

    const {
      prompt,
      type,
    } = req.body;

    let systemPrompt = "";

    if (type === "blog") {

      systemPrompt =
        "Write a professional SEO optimized blog article.";
    }

    else if (type === "email") {

      systemPrompt =
        "Write a professional marketing email.";
    }

    else if (type === "ad") {

      systemPrompt =
        "Write a high converting Facebook ad copy.";
    }

    const response =
      await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${process.env.GROQ_API_KEY}`,
          },

          body: JSON.stringify({

            model:
              "llama3-70b-8192",

            messages: [

              {
                role: "system",
                content: systemPrompt,
              },

              {
                role: "user",
                content: prompt,
              },
            ],

            temperature: 0.7,
          }),
        }
      );

    const data =
      await response.json();

    res.json({

      output:
        data?.choices?.[0]?.message?.content
        ||
        "No AI response",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      output:
        "AI generation failed",
    });
  }
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on ${PORT}`
  );
});