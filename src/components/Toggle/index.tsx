import { Container, ToggleLabel, ToggleSelector } from "../Toggle/styles";


export const Toggle: React.FC = () => (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector
            checked
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={() => console.log('mudou')}


        />
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
)
