import { Tooltip } from "@mui/material";
import React from "react";
import toast from "react-hot-toast";
import { AiOutlineSelect } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../../contextApi/ContextApi";
import api from "../../api/api";

const AiGeneraterUrl = ({ shortUrl, reset, setOpen, refetch, originalUrl }) => {
  const { token } = useStoreContext();
  const shortenUrl = import.meta.env.VITE_REACT_FRONT_END_URL + "/";

  const data = {
    originalUrl: originalUrl,
    url: shortUrl,
  };

  const saveAiShortUrl = async (data) => {
    try {
      const { data: res } = await api.post("/api/urls/addAiUrl", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });

      console.log(res);

      const shortenUrl =
        import.meta.env.VITE_REACT_FRONT_END_URL + "/" + `${shortUrl}`;
      navigator.clipboard.writeText(shortenUrl).then(() => {
        toast.success("Short URL Copied to Clipboard", {
          position: "top-center",
          className: "mb-5",
          duration: 3500,
        });
      });

      await refetch();
      reset();
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("AI ShortURL Selection Failed");
    }
  };

  return (
    <div
      className="m-2 bg-purple-100 p-2 rounded hover:bg-purple-200 cursor-pointer"
      onClick={() => saveAiShortUrl(data)}
    >
      <p className="flex items-center gap-1.5">
        <AiOutlineSelect /> {shortenUrl + shortUrl}
      </p>

      <Tooltip title="Close">
        <button
          onClick={() => setOpen(false)}
          className=" absolute right-2 top-2  "
        >
          <RxCross2 className="text-slate-800   text-3xl" />
        </button>
      </Tooltip>
    </div>
  );
};

export default AiGeneraterUrl;
