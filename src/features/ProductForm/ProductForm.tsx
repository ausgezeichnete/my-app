import { Trash2, Upload, Plus, X } from "lucide-react";

import { AppButton } from "@/common/appButton/appButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ProductForm = () => {
  return (
    <div className="mx-auto flex w-full justify-center bg-white">
      <form className="w-full max-w-[630px] space-y-6">
        {/* ------------------------------------------------------------------ */}
        {/* Images                                                             */}
        {/* ------------------------------------------------------------------ */}

        <div className="flex items-start gap-3">
          <div className="relative h-[137px] w-[244.44px] overflow-hidden rounded-lg border-1 border-light-grey">
            <div className="flex py-3 px-3 justify-between items-center">
              <img
                src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=150&auto=format&fit=crop&q=80"
                alt="Product"
                className="w-[105px] h-[105px]"
              />{" "}
              <div>
                <p className="">Image Name</p>
                <p className="text-[10px]">Date</p>
                <p className="text-[10px]">Image Size</p>
              </div>
            </div>

            <button
              type="button"
              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-red-500 shadow-sm transition hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <label className="flex h-[137px] w-[201px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed bg-muted/40 transition hover:bg-muted bg-[#F5F6F8]">
            <Upload className="mb-2 h-7 w-7 text-muted-foreground " />

            <span className="text-sm text-muted-foreground ">Add image</span>

            <input type="file" accept="image/*" multiple className="hidden" />
          </label>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Product name + Category                                            */}
        {/* ------------------------------------------------------------------ */}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="w-full min-w-0">
            <Label htmlFor="product-name" className="sr-only">
              Product name
            </Label>

            <Input
              id="product-name"
              placeholder="Enter product name"
              className=""
            />
          </div>

          <div className="w-full min-w-0">
            <Label htmlFor="category" className="sr-only ">
              Category
            </Label>

            <Select>
              <SelectTrigger id="category" className="w-full">
                <SelectValue placeholder="Select category" className="" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="electronics">Electronics</SelectItem>

                <SelectItem value="clothing">Clothing</SelectItem>

                <SelectItem value="home">Home</SelectItem>

                <SelectItem value="beauty">Beauty</SelectItem>

                <SelectItem value="sports">Sports</SelectItem>

                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Description                                                        */}
        {/* ------------------------------------------------------------------ */}

        <div>
          <Label htmlFor="description" className="sr-only">
            Product description
          </Label>

          <Textarea
            id="description"
            placeholder="Enter product description"
            className="h-10 min-h-10 resize-none"
          />
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Quantity + Price                                                   */}
        {/* ------------------------------------------------------------------ */}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <Label htmlFor="quantity" className="sr-only">
              Quantity
            </Label>

            <Input id="quantity" type="number" min="0" placeholder="0" />
          </div>

          <div>
            <Label htmlFor="price" className="sr-only">
              Price
            </Label>

            <div className="flex">
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                className="rounded-r-none"
              />

              <Select defaultValue="EUR">
                <SelectTrigger className="w-[80px] rounded-l-none border-l-0 bg-muted">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Sizes                                                              */}
        {/* ------------------------------------------------------------------ */}

        <div>
          <label className="mb-2 flex cursor-pointer items-center gap-2 text-sm font-medium">
            <input type="checkbox" className="h-4 w-4 accent-secondary" />
            Sizes
          </label>

          <div className="space-y-3">
            <div className="relative">
              <Input placeholder="Enter size" className="pr-12" />

              <button
                type="button"
                className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center border-0 bg-transparent p-0"
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add size</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {["S", "M", "L"].map((size) => (
                <div
                  key={size}
                  className="flex items-center gap-2 rounded-md bg-muted px-3 py-1.5 text-sm"
                >
                  <span>{size}</span>

                  <button type="button">
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Colors                                                             */}
        {/* ------------------------------------------------------------------ */}

        <div>
          <label className="mb-2 flex cursor-pointer items-center gap-2 text-sm font-medium">
            <input type="checkbox" className="h-4 w-4 accent-secondary" />
            Colors
          </label>

          <div className="space-y-3">
            <div className="relative">
              <Input placeholder="Enter color" className="pr-12" />

              <button
                type="button"
                className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center border-0 bg-transparent p-0"
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add Color</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Black", "White", "Blue"].map((color) => (
                <div
                  key={color}
                  className="flex items-center gap-2 rounded-md bg-muted px-3 py-1.5 text-sm"
                >
                  <span>{color}</span>

                  <button type="button">
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Order deadline                                                     */}
        {/* ------------------------------------------------------------------ */}

        <div>
          <Label htmlFor="deadline" className="sr-only">
            Order deadline
          </Label>

          <Input id="deadline" type="date" />
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Location                                                           */}
        {/* ------------------------------------------------------------------ */}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <Label htmlFor="country" className="sr-only">
              Country
            </Label>

            <Input id="country" placeholder="Enter country" />
          </div>

          <div>
            <Label htmlFor="city" className="sr-only">
              City
            </Label>

            <Input id="city" placeholder="Enter city" />
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Delivery address                                                   */}
        {/* ------------------------------------------------------------------ */}

        <div>
          <Label htmlFor="delivery-address" className="sr-only">
            Delivery address
          </Label>

          <Input id="delivery-address" placeholder="Enter delivery address" />
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Buttons                                                            */}
        {/* ------------------------------------------------------------------ */}

        <div className="flex justify-center gap-4 pt-4">
          <AppButton
            type="button"
            buttonText="Cancel"
            variant="outlined"
            width="medium"
          />

          <AppButton
            type="submit"
            buttonText="Add Product"
            variant="contained"
            width="medium"
          />
        </div>
      </form>
    </div>
  );
};
