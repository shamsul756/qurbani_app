// components/UpdateUserModal.tsx
"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { BiEdit, BiImage, BiUser } from "react-icons/bi";

export function UpdateUserModal() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name")).value;
    const image = (form.elements.namedItem("image")).value;

    await authClient.updateUser({
      name,
      image,
    });
  };

  return (
    <Modal>
      {/* Responsive Button */}
      <Button
        variant="solid"
        color="primary"
        className="w-full sm:w-auto rounded-xl px-4 sm:px-5 py-2 font-medium shadow-md"
      >
        <BiEdit className="text-lg" />
        <span className="hidden xs:inline">Edit Profile</span>
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          {/* Responsive Modal */}
          <Modal.Dialog className="mx-3 w-full max-w-lg rounded-2xl sm:rounded-3xl border border-gray-200 bg-white shadow-2xl">
            <Modal.CloseTrigger />

            {/* Responsive Header */}
            <Modal.Header className="border-b border-gray-100 pb-4 sm:pb-5 px-4 sm:px-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <Modal.Icon className="bg-blue-100 text-blue-600">
                  <BiUser className="size-5 sm:size-6" />
                </Modal.Icon>

                <div>
                  <Modal.Heading className="text-xl sm:text-2xl font-bold text-gray-900">
                    Update Profile
                  </Modal.Heading>

                  <p className="text-xs sm:text-sm text-gray-500">
                    Change your personal information
                  </p>
                </div>
              </div>
            </Modal.Header>

            {/* Responsive Body */}
            <Modal.Body className="p-4 sm:p-6">
              <Surface
                variant="default"
                className="rounded-xl sm:rounded-2xl border border-gray-100 bg-gray-50 p-4 sm:p-5"
              >
                <form
                  onSubmit={onSubmit}
                  className="flex flex-col gap-4 sm:gap-5"
                >
                  {/* Name Field */}
                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                  >
                    <Label className="mb-2 text-sm font-medium text-gray-700">
                      Full Name
                    </Label>

                    <div className="relative">
                      <BiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base sm:text-lg" />

                      <Input
                        placeholder="Enter your full name"
                        className="pl-10 text-sm sm:text-base"
                      />
                    </div>
                  </TextField>

                  {/* Image Field */}
                  <TextField
                    className="w-full"
                    name="image"
                    type="url"
                  >
                    <Label className="mb-2 text-sm font-medium text-gray-700">
                      Profile Image URL
                    </Label>

                    <div className="relative">
                      <BiImage className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base sm:text-lg" />

                      <Input
                        placeholder="https://example.com/profile.jpg"
                        className="pl-10 text-sm sm:text-base"
                      />
                    </div>
                  </TextField>

                  {/* Responsive Footer */}
                  <Modal.Footer className="mt-3 sm:mt-4 flex flex-col sm:flex-row justify-end gap-3">
                    <Button
                      slot="close"
                      variant="secondary"
                      className="w-full sm:w-auto rounded-xl px-5"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      slot="close"
                      color="primary"
                      className="w-full sm:w-auto rounded-xl px-5 font-semibold shadow-md"
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}