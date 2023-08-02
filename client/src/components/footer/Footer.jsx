import { ColumnOptions, ColumnTitle, FooterColumn, MainContainer, Option } from "./styles";

const Footer = () => {
	return (
        <>
            <MainContainer>
                <FooterColumn>
                    <ColumnTitle>Contacto</ColumnTitle>
                    <ColumnOptions>
                        <Option>Sobre nosotros</Option>
                        <Option>Blog</Option>
                        <Option>soporte@pedalprice.com</Option>
                    </ColumnOptions>
                </FooterColumn>
                <FooterColumn>
                    <ColumnTitle>Catalogo</ColumnTitle>
                    <ColumnOptions>
                        <Option>Ofertas</Option>
                        <Option>Accesorios</Option>
                        <Option>Componentes y repuestos</Option>
                        <Option>Otros</Option>
                    </ColumnOptions>
                </FooterColumn>
                <FooterColumn>
                    <ColumnTitle>Ayuda</ColumnTitle>
                    <ColumnOptions>
                        <Option>FAQs</Option>
                    </ColumnOptions>
                </FooterColumn>
                <FooterColumn>
                    <ColumnTitle>Legal</ColumnTitle>
                    <ColumnOptions>
                        <Option>Términos y condiciones</Option>
                        <Option>Privacidad</Option>
                    </ColumnOptions>
                </FooterColumn>
            </MainContainer>
        </>
	);
};

export default Footer;