import { Text } from "@mantine/core";
import React from "react";
import classes from "./Introduction.module.css";
import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export default function Introduction() {
  const skills = {
    languages: "C++, C#, Java, JavaScript, TypeScript, Python, HTML, CSS, SQL.",
    frameworksLibraries:
      "Spring Boot, Angular, React, Redux, Ember.js, Express.js, Node.js, .NET, REST API.",
    developerTools: ": Git, Postman, Azure, Docker.",
  };

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Text className={classes.introduction} fz="sm">
          My primary focus lies in building software solutions that empower
          users to make informed financial decisions. With a passion for
          full-stack development, I love creating exceptional digital products
          that elevate user experiences and drive tangible value.
        </Text>

        <div className={classes.connect_title_container}>
          <Text className={classes.connect_title} fw={500} fz="lg" mb={5}>
            Connect with me
          </Text>
          <div className={classes.icons_container}>
            <IconBrandLinkedin
              className={classes.icon}
              style={{ width: "1.5rem", height: "1.5rem" }}
              stroke={1.5}
              color="var(--mantine-color-blue-filled)"
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/chuongtran2001/")
              }
            />
            <IconMail
              className={classes.icon}
              style={{ width: "1.5rem", height: "1.5rem" }}
              stroke={1.5}
              color="var(--mantine-color-blue-filled)"
              onClick={() => openInNewTab("mailto:chuongtran2001@gmail.com")}
            />
          </div>
        </div>

        <div className={classes.skills_container}>
          <Text className={classes.skills_title} fw={500} fz="lg" mb={5}>
            Technical skills
          </Text>
          <ul className={classes.skills_list}>
            <li>
              <Text fz="sm">
                <strong>Languages: </strong>
                {skills.languages}
              </Text>
            </li>
            <li>
              <Text fz="sm">
                <strong>Frameworks &amp; Libraries: </strong>
                {skills.frameworksLibraries}
              </Text>
            </li>
            <li>
              <Text fz="sm">
                <strong>Developer Tools: </strong> {skills.developerTools}
              </Text>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
