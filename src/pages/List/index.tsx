import { Container, Content, Filters } from "./styles";
import { ContentHeader } from "../../components/ContentHeader";
import { SelectInput } from "../../components/SelectInput";
import { FinanceCard } from "../../components/FinanceCard";

export const List: React.FC = () => {
  const months = [
    { value: 1, label: "janeiro" },
    { value: 2, label: "fevereiro" },
    { value: 3, label: "março" },
  ];
  const years = [
    { value: 2021, label: "2021" },
    { value: 2022, label: "2022" },
    { value: 2023, label: "2023" },
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#584a">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </Filters>

      <Content>
        <FinanceCard
          tagColor={"#E44C4E"}
          title={"Conta de Luz"}
          subtitle={"27/07/2020"}
          amount={"R$ 130,00"}
        />
      </Content>
    </Container>
  );
};
