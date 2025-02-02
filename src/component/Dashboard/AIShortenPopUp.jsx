import Modal from "@mui/material/Modal";

import React from "react";
import AINewShorten from "./AINewShorten";

const AIShortenPopUp = ({ open, setOpen, refetch }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="flex justify-center items-center h-full w-full">
        <AINewShorten setOpen={setOpen} refetch={refetch} />
      </div>
    </Modal>
  );
};

export default AIShortenPopUp;
