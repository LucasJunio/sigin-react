import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Signin } from "./presentation/Signin";
import { LoadingComponent } from "../../components/utils/Loading";
import type { RootState } from "../../store";
import { SnackbarComponent } from "../../components/Snackbar";

export const SigninContainer = () => {
  const [openLoading, setOpenLoading] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const signer = useSelector((state: RootState) => state.signer);
  const navigate = useNavigate();

  useEffect(() => {
    if (signer.status === "completed") {
      setOpenLoading(false);
      handlerSnackbar({
        severity: "success",
        message: signer.message || "You are signed",
      });
      if (signer.signed) {
        navigate(`/dashboard`);
      }
    } else if (signer.status === "loading") {
      setOpenLoading(true);
    } else if (signer.status === "failed") {
      setOpenLoading(false);
      handlerSnackbar({
        severity: "error",
        message: signer.message || "fail to signin",
      });
    }
  }, [signer.status, signer.message]);

  // TODO: setup handlerSnackbar
  const handlerSnackbar = (props: any) => {
    setOpenSnack(true);
    return (
      <SnackbarComponent
        props={{
          open: openSnack,
          setOpen: setOpenSnack,
          severity: props.severity,
          message: props.message,
        }}
      />
    );
  };

  return (
    <>
      <Signin />
      {/* TODO: setup LoadingComponent */}
      <LoadingComponent open={openLoading} />
    </>
  );
};
