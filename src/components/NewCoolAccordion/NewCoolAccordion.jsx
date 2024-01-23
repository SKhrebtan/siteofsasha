import { styled } from "@mui/system";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
    margin: '0 !important',
    padding: 0,
    backgroundColor: 'inherit',
    '&:before': {
        display: 'none',
    }
}));

const StyledSummary = styled(AccordionSummary)(({ theme }) => ({
    padding: 0,
    margin: '0 !important',
    minHeight: 'unset !important',
    '& > .MuiAccordionSummary-content': {
        margin: '0 !important',
        minHeight: 'unset !important',
    },
    '&.Mui-expanded': {
        margin: '0 !important',
        minHeight: 'unset !important',
    },
    '& > .css-o4b71y-MuiAccordionSummary-content': {
        margin: '0 !important',
        minHeight: 'unset !important',
    },
    '& .css-o4b71y-MuiAccordionSummary-content.Mui-expanded': {
        margin: '0 !important',
        minHeight: 'unset !important',
    }
}));

const StyledDetails = styled(AccordionDetails)(({ theme }) => ({
    padding: 0,
}));

const CustomAccordion = ({ isLast, isActive, ind, point, activePoint, handleAccordionChange, handleSubpointClick, activeSubpoint }) => {
    const activeText = 'text-teal-500 font-bold';
    const activeBox = 'text-white border-2 border-active';
    // const activeLinear = 'linear-gradient(180deg, #C48D5A 0%, #B37840 100%)';
    // const activeShadow = '0px 4px 28px 0px rgba(179, 120, 64, 0.40)';
     const activeLinear = 'teal';
    const activeShadow = 'green';
    const activeSubpointText = 'text-teal-500 bg-75';

    return (
        <div className={`${!isLast
            ? isActive ? 'mb-[8px]' : 'mb-[40px]'
            : ''
            }`}>
            <StyledAccordion
                elevation={0}
                id={`accordion-${ind + 1}`}
                expanded={ind === activePoint}
                onChange={() => handleAccordionChange(ind, point.subpoints[0])}
            >
                <StyledSummary aria-controls={`panel${ind + 1}-content`} id={`panel${ind + 1}-header`}>
                    <div className={`flex flex-row cursor-pointer items-center gap-[24px] ${!isActive ? 'summary' : ''}`}>
                        <div
                            className={`relative min-w-[48px] h-[48px] flex items-center justify-center text-white text-[24px] font-bold rounded-[8px] ${!isActive ? 'point-number' : ''} ${isActive ? activeBox : 'border-notActive border-2'}`}
                            style={{
                                background: isActive ? activeLinear : '',
                                boxShadow: isActive ? activeShadow : '',
                            }}
                        >
                            {ind + 1}
                            {(!isLast && !isActive) && (
                                <div className="absolute bottom-[-34px] h-[24px] w-[2px] rounded-[2px] bg-teal-200" />
                            )}
                        </div>

                        <span className={`text-[20px] leading-[26px] lg:text-[24px] lg:leading-[32px] ${isActive ? activeText : 'font-[600] text-white'}`}>{point.title}</span>
                    </div>
                </StyledSummary>
                <StyledDetails>
                    <div className="mt-[8px] flex flex-row gap-[24px]">
                        <div className="w-full max-w-[48px] flex justify-center">
                            {!isLast && (
                                <div className={`h-full  ${!isActive ? 'w-[2px] rounded-[2px] bg-teal-500' : 'w-[3px] rounded-[3px] bg-teal-300'}`} />
                            )}
                        </div>

                        <div className="mb-[34px] lg:mb-[24px] flex flex-col gap-[6px]">
                            {point.subpoints.map((subpoint, subInd) => (
                                <span
                                    key={subInd}
                                    className={`max-w-max text-[16px] cursor-pointer ${activeSubpoint?.title === subpoint.title ? activeSubpointText : 'font-medium text-white'}`}
                                    onClick={() => handleSubpointClick(subpoint)}
                                >
                                    {subpoint.title}
                                </span>
                            ))}
                        </div>
                    </div>
                </StyledDetails>
            </StyledAccordion>
        </div>
    );
};

export default CustomAccordion;