// Imports
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// Name of Component
export default function EarnButton(props) {

    // Logic

    return (
        <Stack>
            <Button variant="contained" color="success" onClick={props.onClick}>
                Earn!
            </Button>
      </Stack>
    );
}