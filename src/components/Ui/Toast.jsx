import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { X } from "lucide-react";
import "./Toast.scss";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef(
    ({ className, ...props }, ref) => (
        <ToastPrimitives.Viewport ref={ref} className={`toast-viewport ${className}`} {...props} />
    )
);

const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
    return (
        <ToastPrimitives.Root ref={ref} className={`toast toast-${variant} ${className}`} {...props} />
    );
});

const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
    <ToastPrimitives.Action ref={ref} className={`toast-action ${className}`} {...props} />
));

const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
    <ToastPrimitives.Close ref={ref} className={`toast-close ${className}`} {...props}>
        <X className="icon" />
    </ToastPrimitives.Close>
));

const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
    <ToastPrimitives.Title ref={ref} className={`toast-title ${className}`} {...props} />
));

const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
    <ToastPrimitives.Description ref={ref} className={`toast-description ${className}`} {...props} />
));

export {
    ToastProvider,
    ToastViewport,
    Toast,
    ToastTitle,
    ToastDescription,
    ToastClose,
    ToastAction,
};
