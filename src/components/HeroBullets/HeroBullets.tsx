import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import femaleTailor from "../../assets/images/female-tailor.png";
import classes from "./HeroBullets.module.css";

export function HeroBullets() {
  const router = useRouter();

  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Tailor with <span className={classes.highlight}>25+</span> <br />{" "}
            Years of Experience
          </Title>
          <Text c="dimmed" mt="md" size={"lg"}>
            ALTERATING COAT, DRESS, SKIRT, SLACKS, ETC.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Tailoring Excellence</b> – Altering garments with precision and
              passion.
            </List.Item>
            <List.Item>
              <b>Satisfaction Guaranteed</b> – We&apos;re dedicated to your
              satisfaction; your confidence in our work is our top priority.
            </List.Item>
            <List.Item>
              <b>Consultation &#38; Styling</b> – Our expert stylists will guide
              you through the process, ensuring you look your best.
            </List.Item>
            <List.Item>
              <b>Local and Family-Owned</b> – A locally owned and
              family-operated tailor shop, dedicated to our community.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button
              radius="xl"
              size="md"
              className={classes.control}
              onClick={() => router.push("/services")}
            >
              Our Services
            </Button>
          </Group>
        </div>
        <Image
          w={"auto"}
          h="400"
          fit="contain"
          src={femaleTailor.src}
          className={classes.image}
        />
      </div>
    </Container>
  );
}
