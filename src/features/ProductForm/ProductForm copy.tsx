import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2, Upload, Plus, X } from "lucide-react";

import { AppButton } from "@/common/appButton/appButton";

/* -------------------------------------------------------------------------- */
/*                                   Schema                                   */
/* -------------------------------------------------------------------------- */

const productSchema = z.object({
  productName: z.string().min(2, "Product name must be at least 2 characters"),

  category: z.string().min(1, "Please select a category"),

  description: z.string().min(10, "Description must be at least 10 characters"),

  quantity: z
    .number({
      message: "Quantity is required",
    })
    .int("Quantity must be a whole number")
    .min(0, "Quantity cannot be negative"),

  price: z
    .number({
      message: "Price is required",
    })
    .positive("Price must be greater than 0"),

  currency: z.string().min(1, "Currency is required"),

  hasSizes: z.boolean(),

  sizes: z.array(z.string()).optional(),

  hasColors: z.boolean(),

  colors: z.array(z.string()).optional(),

  orderDeadline: z.string().min(1, "Order deadline is required"),

  country: z.string().min(1, "Country is required"),

  city: z.string().min(1, "City is required"),

  deliveryAddress: z.string().min(5, "Delivery address is required"),
});

export type ProductFormData = z.infer<typeof productSchema>;

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

type ProductImage = {
  id: string;
  file?: File;
  preview: string;
};

type ProductFormProps = {
  mode?: "create" | "edit";

  initialData?: Partial<ProductFormData> & {
    images?: string[];
  };

  onSubmit?: (data: ProductFormData, images: ProductImage[]) => void;
};

/* -------------------------------------------------------------------------- */
/*                              Initial values                                */
/* -------------------------------------------------------------------------- */

const defaultValues: ProductFormData = {
  productName: "",
  category: "",
  description: "",
  quantity: 0,
  price: 0,
  currency: "EUR",
  hasSizes: false,
  sizes: [],
  hasColors: false,
  colors: [],
  orderDeadline: "",
  country: "",
  city: "",
  deliveryAddress: "",
};

/* -------------------------------------------------------------------------- */
/*                               Product Form                                 */
/* -------------------------------------------------------------------------- */

export const ProductForm = ({
  mode = "create",
  initialData,
  onSubmit,
}: ProductFormProps) => {
  const [images, setImages] = useState<ProductImage[]>([]);
  const [sizeInput, setSizeInput] = useState("");
  const [colorInput, setColorInput] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      ...defaultValues,
      ...initialData,
    },
  });

  const hasSizes = watch("hasSizes");
  const hasColors = watch("hasColors");
  const sizes = watch("sizes") ?? [];
  const colors = watch("colors") ?? [];

  /* ------------------------------------------------------------------------ */
  /*                              Edit existing                               */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    if (!initialData) return;

    reset({
      ...defaultValues,
      ...initialData,
    });

    if (initialData.images) {
      setImages(
        initialData.images.map((image, index) => ({
          id: `existing-${index}`,
          preview: image,
        })),
      );
    }
  }, [initialData, reset]);

  /* ------------------------------------------------------------------------ */
  /*                              Image upload                                */
  /* ------------------------------------------------------------------------ */

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files) return;

    const newImages: ProductImage[] = Array.from(files).map((file) => ({
      id: crypto.randomUUID(),
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((current) => [...current, ...newImages]);

    event.target.value = "";
  };

  const handleRemoveImage = (id: string) => {
    setImages((current) => {
      const image = current.find((item) => item.id === id);

      if (image?.file) {
        URL.revokeObjectURL(image.preview);
      }

      return current.filter((item) => item.id !== id);
    });
  };

  /* ------------------------------------------------------------------------ */
  /*                                Sizes                                     */
  /* ------------------------------------------------------------------------ */

  const handleAddSize = () => {
    const value = sizeInput.trim();

    if (!value || sizes.includes(value)) return;

    setValue("sizes", [...sizes, value]);
    setSizeInput("");
  };

  const handleRemoveSize = (size: string) => {
    setValue(
      "sizes",
      sizes.filter((item) => item !== size),
    );
  };

  /* ------------------------------------------------------------------------ */
  /*                                Colors                                    */
  /* ------------------------------------------------------------------------ */

  const handleAddColor = () => {
    const value = colorInput.trim();

    if (!value || colors.includes(value)) return;

    setValue("colors", [...colors, value]);
    setColorInput("");
  };

  const handleRemoveColor = (color: string) => {
    setValue(
      "colors",
      colors.filter((item) => item !== color),
    );
  };

  /* ------------------------------------------------------------------------ */
  /*                                 Submit                                   */
  /* ------------------------------------------------------------------------ */

  const submitForm = (data: ProductFormData) => {
    onSubmit?.(data, images);

    console.log("Product data:", data);
    console.log("Product images:", images);
  };

  return (
    <div className="mx-auto w-full bg-white space-y-6 flex justify-center">
      <form onSubmit={handleSubmit(submitForm)} className=" max-w-[630px] ">
        {/* ------------------------------------------------------------------ */}
        {/* Images                                                             */}
        {/* ------------------------------------------------------------------ */}

        <div className="flex flex-wrap items-start gap-3">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative h-[115px] w-[205px] overflow-hidden rounded-lg border bg-white"
            >
              <img
                src={image.preview}
                alt="Product"
                className="h-full w-full object-contain"
              />

              <button
                type="button"
                onClick={() => handleRemoveImage(image.id)}
                className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-red-500 shadow-sm transition hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}

          {/* Upload */}
          <label className="flex h-[115px] w-[165px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed bg-muted/40 transition hover:bg-muted">
            <Upload className="mb-2 h-7 w-7 text-muted-foreground" />

            <span className="text-sm text-muted-foreground">Add image</span>

            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Product name + Category                                            */}
        {/* ------------------------------------------------------------------ */}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <FormField label="Product name" error={errors.productName?.message}>
            <input
              {...register("productName")}
              placeholder="Enter product name"
              className={inputClass}
            />
          </FormField>

          <FormField label="Category" error={errors.category?.message}>
            <select {...register("category")} className={inputClass}>
              <option value="">Select category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="home">Home</option>
              <option value="beauty">Beauty</option>
              <option value="sports">Sports</option>
              <option value="accessories">Accessories</option>
            </select>
          </FormField>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Description                                                        */}
        {/* ------------------------------------------------------------------ */}

        <FormField label="Description" error={errors.description?.message}>
          <textarea
            {...register("description")}
            placeholder="Enter product description"
            rows={4}
            className={`${inputClass} resize-none`}
          />
        </FormField>

        {/* ------------------------------------------------------------------ */}
        {/* Quantity + Price                                                   */}
        {/* ------------------------------------------------------------------ */}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <FormField label="Quantity" error={errors.quantity?.message}>
            <input
              type="number"
              min="0"
              {...register("quantity", {
                valueAsNumber: true,
              })}
              placeholder="0"
              className={inputClass}
            />
          </FormField>

          <FormField label="Price" error={errors.price?.message}>
            <div className="flex">
              <input
                type="number"
                step="0.01"
                min="0"
                {...register("price", {
                  valueAsNumber: true,
                })}
                placeholder="0.00"
                className={`${inputClass} rounded-r-none`}
              />

              <select
                {...register("currency")}
                className="w-[80px] rounded-r-md border border-l-0 bg-muted px-3 text-sm outline-none"
              >
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
              </select>
            </div>

            {errors.currency && (
              <p className="mt-1 text-xs text-red-500">
                {errors.currency.message}
              </p>
            )}
          </FormField>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Sizes                                                              */}
        {/* ------------------------------------------------------------------ */}

        <div>
          <label className="mb-2 flex cursor-pointer items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              {...register("hasSizes")}
              className="h-4 w-4 accent-primary"
            />
            Sizes
          </label>

          {hasSizes && (
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  value={sizeInput}
                  onChange={(event) => setSizeInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      handleAddSize();
                    }
                  }}
                  placeholder="Enter size"
                  className={`${inputClass} flex-1`}
                />

                <button
                  type="button"
                  onClick={handleAddSize}
                  className="flex h-10 w-10 items-center justify-center rounded-md border transition hover:bg-muted"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              {sizes.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <div
                      key={size}
                      className="flex items-center gap-2 rounded-md bg-muted px-3 py-1.5 text-sm"
                    >
                      <span>{size}</span>

                      <button
                        type="button"
                        onClick={() => handleRemoveSize(size)}
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Colors                                                             */}
        {/* ------------------------------------------------------------------ */}

        <div>
          <label className="mb-2 flex cursor-pointer items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              {...register("hasColors")}
              className="h-4 w-4 accent-primary"
            />
            Colors
          </label>

          {hasColors && (
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  value={colorInput}
                  onChange={(event) => setColorInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      handleAddColor();
                    }
                  }}
                  placeholder="Enter color"
                  className={`${inputClass} flex-1`}
                />

                <button
                  type="button"
                  onClick={handleAddColor}
                  className="flex h-10 w-10 items-center justify-center rounded-md border transition hover:bg-muted"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              {colors.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <div
                      key={color}
                      className="flex items-center gap-2 rounded-md bg-muted px-3 py-1.5 text-sm"
                    >
                      <span>{color}</span>

                      <button
                        type="button"
                        onClick={() => handleRemoveColor(color)}
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Order deadline                                                     */}
        {/* ------------------------------------------------------------------ */}

        <FormField label="Order deadline" error={errors.orderDeadline?.message}>
          <input
            type="date"
            {...register("orderDeadline")}
            className={inputClass}
          />
        </FormField>

        {/* ------------------------------------------------------------------ */}
        {/* Location                                                           */}
        {/* ------------------------------------------------------------------ */}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 ">
          <FormField label="Country" error={errors.country?.message}>
            <input
              {...register("country")}
              placeholder="Enter country"
              className={inputClass}
            />
          </FormField>

          <FormField label="City" error={errors.city?.message}>
            <input
              {...register("city")}
              placeholder="Enter city"
              className={inputClass}
            />
          </FormField>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Delivery address                                                   */}
        {/* ------------------------------------------------------------------ */}

        <FormField
          label="Delivery address"
          error={errors.deliveryAddress?.message}
        >
          <input
            {...register("deliveryAddress")}
            placeholder="Enter delivery address"
            className={inputClass}
          />
        </FormField>

        {/* ------------------------------------------------------------------ */}
        {/* Buttons                                                            */}
        {/* ------------------------------------------------------------------ */}

        <div className="flex justify-center gap-4 pt-4">
          <AppButton
            type="button"
            buttonText="Cancel"
            variant="outlined"
            width="medium"
            onClick={() => window.history.back()}
          />

          <AppButton
            type="submit"
            buttonText={mode === "edit" ? "Update Product" : "Add Product"}
            variant="contained"
            width="medium"
          />
        </div>
      </form>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Form Field                                   */
/* -------------------------------------------------------------------------- */

type FormFieldProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
};

const FormField = ({ label, error, children }: FormFieldProps) => {
  return (
    <div className="w-full">
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>

      {children}

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                  Styles                                   */
/* -------------------------------------------------------------------------- */

const inputClass =
  "h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary";
