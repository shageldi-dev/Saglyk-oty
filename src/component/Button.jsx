import React, { useContext, useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import { AppContext } from "../App.js";
import { Fonts, colors } from "../common/theme.mjs";

const styles = {
    outlined: {
        border: `3px solid ${colors.primary}`,
        borderRadius: '30px',
        fontFamily: Fonts.AppBold,
        fontSize: '14px',
        pl: '30px',
        pr: '30px',
        textTransform: 'none',
        "&:hover": {
            border: `3px solid ${colors.primary}`,
            borderRadius: '30px',
        }
    },
    contained: {
        borderRadius: '30px',
        fontFamily: Fonts.AppBold,
        fontSize: '14px',
        pl: '30px',
        pr: '30px',
        pt: 1,
        pb: 1,
        color: '#FFFFFF',
        textTransform: 'none',
        "&:hover": {
            borderRadius: '30px',
        }
    }
}

const AppButton = (props) => {
    const { isMobile } = useContext(AppContext);
    return (
        <Stack direction={'row'}>
            <Button variant={props.variant} sx={{ ...styles[props.variant], fontSize: isMobile ? '12px' : '14px' }}>
                {props.title}
            </Button>
        </Stack>
    )
}

export default AppButton;