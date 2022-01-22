import { Container, Tabs, TabList, Tab } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { TABS_FILTER } from "../constants"
import { setFilter } from "../redux/tabs/tabs.action"

const TabsFilter = () => {
    const dispatch = useDispatch()

    return (
        <Container centerContent>
            <Tabs>
                <TabList>
                    {
                        Object.keys(TABS_FILTER).map((item, index) => {
                            const currentFilter = TABS_FILTER[item]
                            return (
                                < Tab key={index} onClick={() => dispatch(setFilter(currentFilter))}>
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

export default TabsFilter;
