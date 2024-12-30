"use client";

import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import { endpoints } from "@/data/endpoints";
import ImageUpload from "../common/ImageUpload";
import ToggleButton from "../common/ToggleButton";
import { Fetch, Post, Put } from "@/hooks/apiUtils";
import { FormEvent, ChangeEvent, useState } from "react";

const RichTextEditor = dynamic(() => import("../common/RichTextEditor"), {
  ssr: false,
});

interface BlogFormProps {
  onClose?: any;
  formType: any;
  data?: BlogState;
  setFilteredData?: any;
}

interface BlogState {
  _id: string;
  title: string;
  isActive: boolean;
  imageUrl?: string;
  description: string;
  shortDescription: string;
  blogImageUrl: File | string;
}

const BlogForm: React.FC<BlogFormProps> = (props) => {
  const data = props.data;
  const [form, setForm] = useState<BlogState>({
    _id: data?._id ?? "",
    title: data?.title ?? "",
    isActive: data?.isActive ?? true,
    description: data?.description ?? "",
    shortDescription: data?.shortDescription ?? "",
    blogImageUrl: data?.imageUrl ? `/api/image?url=${data?.imageUrl}` : "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value as string); // Append other data
    });

    try {
      const currentEndpoint = endpoints[props.formType];
      const url = form?._id ? currentEndpoint.update : currentEndpoint.create;

      const resp: any = form?._id
        ? await Put(`${url}${form?._id}`, formData, 5000)
        : await Post(url, formData, 5000);

      if (resp.success) {
        const response: any = await Fetch(currentEndpoint.fetchAll);
        if (response?.success) props.setFilteredData(response?.data?.result);
        else window.location.reload(); // TODO: this should be done in future
      } else return toast.error("Failed to update blog");
    } catch (error: any) {
      console.log("Failed to update blog", error);
    } finally {
      props.onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex flex-col col-span-3">
          <label htmlFor="title" className="mb-2 font-semibold text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="p-2 border border-gray-300 !autofill:bg-transparent rounded-lg outline-none"
          />
        </div>
        <div className="flex flex-col col-span-3">
          <label
            htmlFor="shortDescription"
            className="mb-2 font-semibold text-gray-700"
          >
            Short Description
          </label>
          <input
            type="text"
            id="shortDescription"
            name="shortDescription"
            onChange={handleChange}
            value={form.shortDescription}
            className="p-2 border border-gray-300 !autofill:bg-transparent rounded-lg outline-none"
          />
        </div>
        <div className="flex flex-col col-span-3">
          <label
            htmlFor="description"
            className="mb-2 font-semibold text-gray-700"
          >
            Description
            <div className="flex flex-col col-span-3">
              <RichTextEditor setState={setForm} data={form.description} />
            </div>
          </label>
        </div>
        <div className="flex flex-col col-span-1">
          <label
            htmlFor="isActive"
            className="mb-2 font-semibold text-gray-700"
          >
            Do you want to activate this blog post?
          </label>
          <ToggleButton setState={setForm} data={form.isActive} />
        </div>
        <div className="flex flex-col col-span-1">
          <label
            htmlFor="isActive"
            className="mb-2 font-semibold text-gray-700"
          >
            Please upload a file to your server
          </label>
          <ImageUpload
            setState={setForm}
            fieldname="blogImageUrl"
            data={form.blogImageUrl}
          />
        </div>
      </div>
      <div className="flex justify-start mt-3 items-center space-x-2">
        <button
          type="submit"
          className="md:col-span-2 mt-2 py-1 bg-primary hover:bg-primary/70 transition-all duration-200 ease-linear text-white rounded-md text-lg w-fit px-3"
        >
          {form._id ? "Update" : "Save"}
          <sup>+</sup>
        </button>
        <button
          type="button"
          onClick={props.onClose}
          className="md:col-span-2 mt-2 py-1 bg-red-600 transition-all duration-200 ease-linear text-white rounded-md text-lg w-fit px-3"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
