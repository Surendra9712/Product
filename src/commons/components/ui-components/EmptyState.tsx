import {
    CartIllustration,
    FileIllustration,
} from "../illustrations/illustrations";
import {AppText, AppTitle} from "../index";

export type EmptyStateTypes = "cart" | "default";

interface EmptyStateProps {
    type?: EmptyStateTypes
}

const emptyStateConfig = {
    cart: {
        title: 'Your Cart is Empty',
        message: 'Start adding items to your cart to begin shopping.',
        icon: CartIllustration
    },
    default: {
        title: 'No Data Available',
        message: 'There is currently no data to display. Please check back later.',
        icon: FileIllustration
    }
};

export default function EmptyState({type = 'default'}: EmptyStateProps) {
    const {title, message, icon} = emptyStateConfig[type] || emptyStateConfig.default;

    return (
        <div className="flex justify-center align-items-center flex-column gap-2xl">
            <AppText as={'span'}> {icon}</AppText>
            <div style={{maxWidth: '25rem'}} className="flex flex-column align-items-center">
                <AppTitle as='h4' textAlign='center'>{title}</AppTitle>
                <AppText textAlign='center'>{message}</AppText>
            </div>
        </div>
    );
}
