import React, { useState } from "react";
import { Box, styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { fetchArrayOfItems } from "../../actions/actions";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import CircularProgress from "@mui/material/CircularProgress";
import { ModalProps } from "components/types";


const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;

const StyledButton = styled(Button)`
  margin-bottom: 5px;
  width: 100%;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
`;

const SpinnerContainer = styled("div")`
  display: flex;
  justify-content: center;
  padding: 50px;
`;


const style = {
  maxHeight: "600px",
  overflow: "scroll",
  width: 400,
  bgcolor: "background.white",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};

export default function Modal ({ item, displayName, result }: ModalProps) {
  const dispatch = useDispatch();
  const isBranchedRootLoading = useSelector((state: any) => state.roots.isBranchedRootLoading);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    dispatch(fetchArrayOfItems(item));
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <div>
      <StyledButton onClick={handleOpen} type="button">
        {displayName}
      </StyledButton>
      <StyledModal
        aria-describedby="unstyled-modal-description"
        aria-labelledby="unstyled-modal-title"
        BackdropComponent={Backdrop}
        onClose={handleClose}
        open={open}
      >
        <Box sx={style}>
          <h2 id="unstyled-modal-title">{displayName}</h2>
          <p id="unstyled-modal-description">{isBranchedRootLoading ?             
          (<SpinnerContainer>
              <CircularProgress />
            </SpinnerContainer>) : result()}</p>
        </Box>
      </StyledModal>
    </div>
  );
}
