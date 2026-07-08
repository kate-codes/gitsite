import React from 'react'
import { Box, Button, Typography, Paper } from '@mui/material'
import { HelloWorldCardProps } from '../types'
import {
    APP_GREETING,
    APP_DESCRIPTION,
    APP_SUBTEXT,
    APP_BUTTON_TEXT,
    GRADIENT_PRIMARY,
    GRADIENT_SECONDARY,
} from '../constants'

const HelloWorldCard: React.FC<HelloWorldCardProps> = ({ onButtonClick }) => {
    return (
        <Paper
            elevation={3}
            sx={{
                padding: 4,
                textAlign: 'center',
                maxWidth: 500,
                borderRadius: 2,
            }}
        >
            <Typography variant="h3" component="h1" gutterBottom sx={{ marginBottom: 2 }}>
                {APP_GREETING}
            </Typography>
            <Typography variant="body1" paragraph>
                {APP_DESCRIPTION}
            </Typography>
            <Typography variant="body1" paragraph>
                {APP_SUBTEXT}
            </Typography>
            <Button
                variant="contained"
                size="large"
                onClick={onButtonClick}
                sx={{
                    marginTop: 2,
                    background: `linear-gradient(135deg, ${GRADIENT_PRIMARY} 0%, ${GRADIENT_SECONDARY} 100%)`,
                }}
            >
                {APP_BUTTON_TEXT}
            </Button>
        </Paper>
    )
}

export default HelloWorldCard
