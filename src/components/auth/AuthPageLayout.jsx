import React from "react";
import { loginForm } from "../../assets/images";

const AuthPageLayout = ({
  children,
  image = loginForm,
  imageAlt = "Authentication illustration",
}) => {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-3 overflow-hidden bg-white">
      <div className="hidden lg:block lg:col-span-2 relative bg-nomad-primary">
        <div className="absolute inset-0 bg-black/15" />
        <div className="relative z-10 h-full p-12 xl:p-20 flex items-center justify-center">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      <div className="lg:col-span-1 p-6 md:p-8 flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthPageLayout;
