export const getRating = (strength: string) => {
    if (strength === 'Weak') {
        return 0.1;
    } else if (strength === 'Moderate') {
        return 0.25;
    } else if (strength === 'Strong') {
        return 0.5;
    } else if (strength === 'Very Strong') {
        return 0.75;
    } else {
        return 1;
    }
}