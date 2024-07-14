export const getColor = (strength: string) => {
    if (strength === 'Weak') {
        return 'red';
    } else if (strength === 'Moderate') {
        return 'orange';
    } else if (strength === 'Strong') {
        return '#ffd700';
    } else if (strength === 'Very Strong') {
        return 'lightgreen';
    } else if (strength === 'Excellent') {
        return 'green';
    }
}