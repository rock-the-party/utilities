"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
expect.extend({
    toBeWithinRange(received, floor, ceiling) {
        const pass = received >= floor && received <= ceiling;
        if (pass) {
            return {
                message: () => `expected ${received} not to be within range [${floor}, ${ceiling}]`,
                pass: true,
            };
        }
        else {
            return {
                message: () => `expected ${received} to be within range [${floor}, ${ceiling}]`,
                pass: false,
            };
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLW1hdGNoZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vX190ZXN0c19fL2N1c3RvbS1tYXRjaGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVVBLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDWixlQUFlLENBQUMsUUFBZ0IsRUFBRSxLQUFhLEVBQUUsT0FBZTtRQUM5RCxNQUFNLElBQUksR0FBRyxRQUFRLElBQUksS0FBSyxJQUFJLFFBQVEsSUFBSSxPQUFPLENBQUM7UUFFdEQsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPO2dCQUNMLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDWixZQUFZLFFBQVEsNEJBQTRCLEtBQUssS0FBSyxPQUFPLEdBQUc7Z0JBQ3RFLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDWixZQUFZLFFBQVEsd0JBQXdCLEtBQUssS0FBSyxPQUFPLEdBQUc7Z0JBQ2xFLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQztTQUNIO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQyJ9