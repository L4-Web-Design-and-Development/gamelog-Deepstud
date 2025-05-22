import { useState, useRef } from "react";
import { Link } from "@remix-run/react";
import ImageUploader from "~/components/ImageUploader";
import { useForm } from "react-hook-form";

interface Category {
  id: string;
  title: string;
}

interface GameFormProps {
  categories: Category[];
  releaseDate: string;
  genre?: string;
  imageUrl: string;
}
export default function GameForm(props: GameFormProps) {
  const [imageUrl, setImageUrl] = useState(props.imageUrl ?? "");
  const formRef = useRef<HTMLFormElement>(null);
  const [imageError, setImageError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    {
      ("Checks the image url if string is empty stop submission ");
    }
    if (!imageUrl) {
      setImageError("Please add a game image");
      return;
    }

    setImageError("");
    formRef.current?.submit();
  };
  return (
    <div className="max-w-2xl mx-auto bg-gray-950 p-8 rounded-xl">
      <form
        ref={formRef}
        method="post"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <input type="hidden" name="imageUrl" value={imageUrl} />

        <div>
          <label htmlFor="title" className="block text-sm text-slate-400 mb-2">
            Title
          </label>
          <input
            {...register("title", { required: "Game title is required" })}
            type="text"
            className="w-full p-3 bg-gray-800 rounded-md"
          />
          {errors.title && typeof errors.title.message === "string" && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm text-slate-400 mb-2"
          >
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            name="description"
            rows={4}
            className="w-full p-3 bg-gray-800 rounded-md"
          ></textarea>
          {errors.description && (
            <p className="text-red-500">
              {String(errors.description.message)} ===
            </p>
          )}
        </div>

        <div className="mb-8">
          <ImageUploader onImageUploaded={setImageUrl} />
          {imageError && <p className="text-red-500 mt-2">{imageError}</p>}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="price"
              className="block text-sm text-slate-400 mb-2"
            >
              Price
            </label>
            <input
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
                min: { value: 0.0, message: "Minimum price 0" },
              })}
              name="price"
              type="number"
              step="0.01"
              min="0"
              className="w-full p-3 bg-gray-800 rounded-md"
            />
            {errors.price && (
              <p className="text-red-500">{String(errors.price.message)}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="rating"
              className="block text-sm text-slate-400 mb-2"
            >
              Rating
            </label>

            <input
              {...register("rating", {
                required: "Rating is required",
                valueAsNumber: true,
                min: { value: 0, message: "Minimum is 0" },
                max: { value: 5, message: "Maximum is 5" },
              })}
              name="rating"
              type="number"
              step=".5"
              min="0"
              className="w-full p-3 bg-gray-800 rounded-md"
            />
            {errors.rating && (
              <p className="text-red-500">{String(errors.rating.message)}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="releaseDate"
            className="block text-sm text-slate-400 mb-2"
          >
            Release Date
          </label>
          <input
            {...register("releaseDate", {
              required: "Release date is required",
            })}
            name="releaseDate"
            type="date"
            className="w-full p-3 bg-gray-800 rounded-md"
          />
          {errors.releaseDate && (
            <p className="text-red-500">{String(errors.releaseDate.message)}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="categoryId"
            className="block text-sm text-slate-400 mb-2"
          >
            Category
          </label>
          <select
            {...register("categoryId", { required: "Category is required" })}
            name="categoryId"
            className="w-full p-3 bg-gray-800 rounded-md"
          >
            <option value="">Select a category</option>
            {props.categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
          {errors.categoryId && (
            <p className="text-red-500">{String(errors.categoryId.message)}</p>
          )}
        </div>

        <div className="flex justify-end gap-16">
          <Link
            to="/"
            className="text-red-300 border-2 border-red-300 py-3 px-6 rounded-md hover:bg-red-50/10"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="bg-cyan-600 text-white py-3 px-6 rounded-md hover:bg-cyan-500"
          >
            Add Game
          </button>
        </div>
      </form>
    </div>
  );
}
