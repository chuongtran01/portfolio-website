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
      "Collaborated with cross-functional teams to design and implement dynamic, responsive user interfaces, and develop robust RESTful APIs to enhance feature sets and improve application performance.",
    skills: [
      {
        id: "1",
        name: "Angular",
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
      "Successfully implemented 15+ new features in the company's software within the first 20 weeks of employment, significantly enhancing product functionality and user satisfaction.",
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
      "Worked with professor to design and execute programming activities and assessments, and facilitated lab sessions, emphasizing practical application of data structures and algorithms in C++.",
    skills: [
      {
        id: "5",
        name: "C++",
      },
    ],
  },
  {
    id: "4",
    timeFrame: "Dec 2022 - Apr 2023",
    company: "Mainbridge Health Partners",
    position: "Software Engineer Intern",
    description:
      "Developed and expanded features, involving both front-end and back-end tasks which resulted in better user experience.",
    skills: [
      {
        id: "7",
        name: "C#",
      },
      {
        id: "8",
        name: "ASP.NET",
      },
      {
        id: "9",
        name: "Microsoft SQL Server",
      },
      {
        id: "10",
        name: "HTML",
      },
      {
        id: "11",
        name: "CSS",
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
