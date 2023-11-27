import { Backdrop, CircularProgress } from "@mui/material";

export type LoadingProps = {
  open: boolean;
};

export const LoadingComponent = (props: LoadingProps) => {
  return (
    <Backdrop sx={{ zIndex: 99, color: "#e6e6e6" }} open={props.open}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};
