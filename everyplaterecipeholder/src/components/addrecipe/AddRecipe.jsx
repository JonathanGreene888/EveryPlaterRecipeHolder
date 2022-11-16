import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

export const AddRecipe = () => {
    const [ingredients, setIngredients] = useState([])
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <Stack alignItems="center" spacing={2}>
                    <TextField
                        id="standard-number"
                        label="Title"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                    />
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Button variant="contained" component="label">
                            Upload
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton>
                    </Stack>
                    <TextField
                        id="standard-multiline-static"
                        label="Summary"
                        multiline
                        minRows={4}
                        variant="standard"
                    />
                    <Button variant="contained" onClick={(e) => setIngredients(ingredients => [...ingredients, " "])} startIcon={<AddIcon />}>Add ingredient </Button>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <>
                            <TextField
                                id="standard-number"
                                label="Name"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="standard"
                            />
                            <TextField
                                id="standard-number"
                                label="Quantity"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="standard"
                            />
                            <TextField
                                id="standard-number"
                                label="Measurment"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="standard"
                            />
                        </>
                    </Stack>
                    {ingredients.map((i) => {
                        return (
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <TextField
                                    id="standard-number"
                                    label="Name"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="standard"
                                />
                                <TextField
                                    id="standard-number"
                                    label="Quantity"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="standard"
                                />
                                <TextField
                                    id="standard-number"
                                    label="Measurment"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="standard"
                                />
                            </Stack>
                        )
                    })}
                </Stack>
                <Button variant="contained" >Save Recipe </Button>
            </div>
        </Box>
    )
}