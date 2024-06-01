import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MarginDiv } from '../style/base/margin';
import { FlexContainer } from '../style/base/layout';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => (
    <footer>
        <div
            style={{
                width: '98%',
                padding: '1%',
                backgroundColor: '#E8E8E8',
                marginTop: '3rem',
            }}
        >
            <MarginDiv $Bottom="10px">Contact Me</MarginDiv>
            <a
                target="_blank"
                href="https://github.com/wax05"
                style={{ color: 'black' }}
            >
                <FlexContainer style={{ marginBottom: '1rem' }}>
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="2x"
                        style={{ marginRight: '1rem' }}
                    />
                    <p>Wax05</p>
                </FlexContainer>
            </a>
            <a href="mailto:jiseop1008@gmail.com" style={{ color: 'black' }}>
                <FlexContainer style={{ marginBottom: '1rem' }}>
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        size="2x"
                        style={{ marginRight: '1rem' }}
                    />
                    <p>jiseop1008@gmail.com</p>
                </FlexContainer>
            </a>
            <FlexContainer style={{ marginBottom: '1rem' }}>
                <FontAwesomeIcon
                    icon={faPhone}
                    size="2x"
                    style={{ marginRight: '1rem' }}
                />
                <p>+82 010-4012-3570</p>
            </FlexContainer>
        </div>
    </footer>
);
