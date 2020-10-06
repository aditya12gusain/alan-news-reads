import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import NewsCard from "../NewsCard/NewsCard";
import useStyles from "./styles.js";

const infoCards = [
  { color: "#fca311", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
  {
    color: "#fca311",
    title: "Some more search terms",
    text: "What does this app do. Read the news. Go Back.",
  },
  {
    color: "#1565c0",
    title: "News only from India",
    info: "Contains all the latest news related to India",
    text: "Give me the latest news from India",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={3} lg={4}>
              <Box
                boxShadow={3}
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography var="h5">
                  {infoCard.title}
                  <br />
                  <br />
                </Typography>
                {infoCard.info ? (
                  <Typography var="h6">
                    <strong>{infoCard.title.split(" ")[2]} </strong> <br />{" "}
                    {infoCard.info} <br />
                    <br />
                  </Typography>
                ) : null}
                <Typography var="h6">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} activeArticle={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
