import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export const CopyrightComponent = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.linkedin.com/in/lucas-junio/">
        Linkedin
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
