import { Container } from './styles'
import { ContentHeader } from '../../components/ContentHeader'
import { SelectInput } from '../../components/SelectInput'



export const Dashboard: React.FC = () => {

    const options = [
        { value: 'jan', label: 'janeiro' },
        { value: 'feb', label: 'fevereiro' },
        { value: 'mar', label: 'março' }
    ]



    return (
        <Container>

            <ContentHeader title='Dashboard' lineColor='#fff'>

                <SelectInput options={options} />
                <SelectInput options={options} />

            </ContentHeader>

        </Container>
    );
}