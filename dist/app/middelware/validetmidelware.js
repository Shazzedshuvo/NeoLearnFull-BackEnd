import { ZodError } from "zod";
export const validateMiddleware = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body); // Validate request body
            next(); // Validation passed → go to next middleware/controller
        }
        catch (error) {
            if (error instanceof ZodError) {
                // Map Zod issues to readable format
                const formattedErrors = error.issues.map((err) => ({
                    field: err.path.join('.'),
                    message: err.message,
                }));
                return res.status(400).json({
                    success: false,
                    message: "Validation Error",
                    errors: formattedErrors,
                });
            }
            // Unexpected errors
            return res.status(500).json({
                success: false,
                message: "Something went wrong",
            });
        }
    };
};
//# sourceMappingURL=validetmidelware.js.map