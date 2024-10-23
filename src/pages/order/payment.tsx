import {useForm} from "react-hook-form";
import React, {useState} from "react";

enum PaymentType {
    CreditCard = 1,
    BankTransfer = 2
}

interface PaymentProps {
    onBack: (value: number) => void;
    onConfirm: (value: any) => void;
}

export default function Payment({onBack,onConfirm}: PaymentProps) {
    const accountNumber = 13235779906788;
    const {control} = useForm()
    const [paymentMethod, setPaymentMethod] = useState(PaymentType.CreditCard);
    const [isAccountNumberCopied, setAccountNumberCopied] = useState(false);

    const handleAccountNumberCopy = () => {
        if (isAccountNumberCopied) return;
        navigator.clipboard.writeText(accountNumber.toString()).then();
        setAccountNumberCopied(true);
        setTimeout(() => {
            setAccountNumberCopied(false);
        }, 5000)
    }

    return <>
       {/* <AppBox flexDirection={'column'} gap='2xs'>
            <InputController label={'Contact Information'} control={control} name={'contact'}
                             placeholder={'Email Address'}/>
            <AppBox displayBlock className='ee-input-group'>
                <AppText as='label' className='ee-input-label'>Payment Method</AppText>
                <AppBox gap='xs'>
                    <div
                        onClick={() => setPaymentMethod(PaymentType.CreditCard)}
                        className={`payment-type-box ${paymentMethod === PaymentType.CreditCard ? 'border-primary' : ''}`}>
                        <AppText as="span">{IconCreditCard}</AppText>
                        <AppText size='lg' className='mt-2xs'>Debit/Credit Card</AppText>
                    </div>
                    <div onClick={() => setPaymentMethod(PaymentType.BankTransfer)}
                         className={`payment-type-box ${paymentMethod === PaymentType.BankTransfer ? 'border-primary' : ''}`}>
                        <AppText as="span">{IconUniversity}</AppText>
                        <AppText size='lg' className='mt-2xs'>Bank Transfer</AppText>
                    </div>
                </AppBox>
            </AppBox>
            {paymentMethod === PaymentType.CreditCard ?
                <AppBox displayBlock className='ee-input-group'>
                    <AppText as='label' className='ee-input-label'>Card Details</AppText>
                    <AppBox flexDirection={'column'} gap='2xs'>
                        <InputController className='pb-none' control={control} name={'cardName'}
                                         placeholder={'Card Name'}/>
                        <InputController className='pb-none' control={control} name={'cardNumber'}
                                         placeholder={'Card Number'}/>
                        <AppBox gap='2xs'>
                            <InputController className='pb-none' control={control} name={'cvv'} placeholder={'CVV'}/>
                            <InputController type={'date'} className='pb-none' control={control} name={'expireDate'}
                                             placeholder={'Exp Date'}/>
                        </AppBox>
                        <AppCheckBox label={'Securely save this card for a faster checkout next time'}/>
                    </AppBox>
                </AppBox> :
                <AppBox displayBlock className='ee-input-group'>
                    <AppText size={'lg'} fontWeight='semibold'>Bank Details</AppText>
                    <AppText className='mb-sm' color='secondary' size='sm'>Make transfer to the account details
                        provided</AppText>
                    <AppPaper padding={'sm'} className='border text-center' radius={'sm'}>
                        <AppText size='lg' fontWeight='semibold'>Bank Name</AppText>
                        <AppBox justifyContent='between' gap='sm' mt='sm'>
                            <AppBox flexDirection='column' alignItems={'start'}>
                                <AppText size='sm' color='secondary'>Account Number</AppText>
                                <AppBox gap={'3xs'} alignItems={'center'}>
                                    <AppText size='lg' fontWeight='semibold'>{accountNumber}</AppText>
                                    <span
                                        onClick={handleAccountNumberCopy}>{isAccountNumberCopied ? IconCheck : IconCopy}</span>
                                </AppBox>
                            </AppBox>
                            <AppBox flexDirection='column' alignItems={'end'}>
                                <AppText size='sm' color='secondary'>Account Name</AppText>
                                <AppText size='lg' fontWeight='semibold' textAlign={'end'}>XYZ Bank
                                    Account</AppText>
                            </AppBox>
                        </AppBox>
                    </AppPaper>
                </AppBox>
            }
            <AppBox gap='xs'>
                <AppButton fullWidth variant={'outline'} label={'Back'} onClick={() => onBack(0)}/>
                <AppButton fullWidth label={'Confirm'} onClick={() => onConfirm(2)}/>
            </AppBox>
        </AppBox>*/}
    </>
}