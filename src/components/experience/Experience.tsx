import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Paper,
  Text,
  useMantineTheme,
  rem,
  Title,
  Button,
} from "@mantine/core";
import classes from "./Experience.module.css";

interface CardProps {
  timeFrame: string;
  company: string;
  position: string;
  description: string;
  skills: any[];
}

function Card({
  timeFrame,
  company,
  position,
  description,
  skills,
}: CardProps) {
  return (
    <Paper shadow="md" p="lg" radius="md" className={classes.card}>
      <div className={classes.left}>
        <Text fw={"500"} className={classes.left_text} size={"md"}>
          {timeFrame}
        </Text>
      </div>
      <div className={classes.right}>
        <div>
          <Title className={classes.right_title} order={5}>
            {company}
          </Title>
          <Title className={classes.right_title} order={6}>
            {position}
          </Title>
          <Text fz={"sm"} className={classes.description}>
            {description}
          </Text>
        </div>

        <div className={classes.skills}>
          {skills.map((skill) => (
            <Button key={skill.id} variant="light" radius="xl" size="sm">
              {skill.name}
            </Button>
          ))}
        </div>
      </div>
    </Paper>
  );
}

const data = [
  {
    id: "1",
    timeFrame: "Jan 2024 - PRESENT",
    company: "Infodat",
    position: "Software Developer",
    description:
      "Achieved substantial growth in practice onboardings, purchases, and user satisfaction by enhancing a web application with new features and efficient, reusable components. Improved operational efficiency and ensured system stability through optimized database schemas, API development, and thorough troubleshooting practices.",
    skills: [
      {
        id: "1",
        name: "Ember.js",
      },
      {
        id: "2",
        name: "TypeScript",
      },
      {
        id: "3",
        name: "Java",
      },
      {
        id: "4",
        name: "Spring Boot",
      },
    ],
  },
  {
    id: "2",
    timeFrame: "May 2023 - Dec 2023",
    company: "Infodat",
    position: "Software Developer Intern",
    description:
      "Delivered new features using Spring Boot and React within 10 weeks, while boosting code quality by raising test coverage to 80% with extensive unit and integration tests. Automated deployment to AWS EC2 through a CI/CD pipeline built with GitHub Actions.",
    skills: [
      {
        id: "1",
        name: "React",
      },
      {
        id: "2",
        name: "TypeScript",
      },
      {
        id: "3",
        name: "Java",
      },
      {
        id: "4",
        name: "Spring Boot",
      },
    ],
  },
  {
    id: "3",
    timeFrame: "Aug 2022 - May 2023",
    company: "University of Houston",
    position: "Teaching Assistant",
    description:
      "Designed and delivered a robust curriculum with 20+ hands-on programming activities, enhancing student proficiency in data structures and algorithms in C++. Led lab sessions for over 50 students, offering guidance and fostering a deep understanding of advanced programming concepts.",
    skills: [
      {
        id: "5",
        name: "C++",
      },
    ],
  },
];

export function Experience() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.id}>
      <Card
        timeFrame={item.timeFrame}
        company={item.company}
        position={item.position}
        description={item.description}
        skills={item.skills}
      />
    </Carousel.Slide>
  ));

  return (
    <div>
      <Text className={classes.carousel_title} size={"sm"}>
        Experience
      </Text>
      <Carousel
        slideSize={{ base: "100%", sm: "50%" }}
        slideGap={{ base: rem(2), sm: "xl" }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </div>
  );
}
