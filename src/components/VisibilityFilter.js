import { Container, Tabs, TabList, Tab } from "@chakra-ui/react";

import { VISIBILITY_FILTER } from "../constants"

const VisibilityFilter = () => {
    return (
        <Container centerContent>
            <Tabs>
                <TabList>
                    {
                        Object.keys(VISIBILITY_FILTER).map((item, index) => {
                            const currentFilter = VISIBILITY_FILTER[item]
                            return (
                                < Tab key={index} >
                                    {currentFilter}
                                </Tab>
                            )
                        }
                        )
                    }
                </TabList>
            </Tabs>
        </Container>
    )
};

export default VisibilityFilter;
